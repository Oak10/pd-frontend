import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie } from 'src/app/common/movie';
import { MovieService } from 'src/app/services/movie.service';
import { MessageService, ConfirmationService} from 'primeng/api';
import { Table } from 'primeng/table';
import { SearchMovieService } from 'src/app/services/search-movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{

  @ViewChild('dt') dt: Table | undefined;
  movies: Movie[] = [];
  movie!: Movie; 
  //{ id: -1, title: '', description: '', rating: 0};


  //selected ref
  
  movieNew!: Movie;
  movieToEdit!: Movie;
  submitted = false;
  newMovieDialog = false;
  editMovieDialog = false;

 
  constructor(
    private movieService: MovieService,
    private messageService: MessageService, 
    private confirmationService: ConfirmationService,
    private searchMovieService: SearchMovieService) { }

    ngOnInit(): void {
        this.getAllMovies();
      }

      getAllMovies() { 
        this.movieService.getMoviesList().subscribe(
          data => { 
            this.movies = data;
          })
      
      }

  openNewMovie() {  
    this.movieNew = new Movie(-1, "", "", 0);
    this.submitted = false;
    this.newMovieDialog = true;
  }

  deleteSelectedMovie() {  
    this.movieService.deleteMovie(this.movie.id).subscribe(
      data => {
        this.showSuccess("Movie deleted");
        this.getAllMovies();
      },
      error => { this.showError("Error deleting movie", error); }
    )
  }

  saveNewMovie() {
    this.submitted = true;

    if (this.movieNew.title) {
      this.movieService.createMovie(this.movieNew).subscribe  ( data => {   
        this.showSuccess("Movie created");
        this.getAllMovies();
      },
      error => { this.showError("Error creating movie", error); }
    )}
      

  }

  editSelectedMovie() {
    this.movieToEdit = this.movie;
    this.submitted = false;
    this.editMovieDialog = true;
  }

  updateMovie() {
    this.submitted = true;
    if (this.movieToEdit.title) {
      this.movieService.updateMovie(this.movieToEdit, this.movieToEdit.id).subscribe( data => {
        this.showSuccess("Movie edited");
        this.getAllMovies();
      },
      error => { this.showError("Error editing movie", error); }
    )}
  }


  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  clear(table: Table) {
    table.clear();
  }

  showSuccess(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  showError(message: string, error: any) {
    this.messageService.add({ severity: 'error', summary: 'Error ' + error.status, detail: message });
  }

  hideDialog() {
    this.newMovieDialog = false;
    this.submitted = false;
  }

  hideDialogEdit() {
    this.editMovieDialog = false;
    this.submitted = false;
  }

  searchDescription(isNew: boolean) {
    this.searchMovieService.searchMovieByTitle( isNew ? this.movieNew.title : this.movieToEdit.title ).subscribe(
      data => { 
        if (data){
          this.movieNew.description = data.description;
        }else{
          this.showSuccess("Movie not Found");
        }
      })
  }
  
}
