import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { User } from '../../../core/interfaces/user';
import { AccountService } from '../../../core/services/account.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrl: './user-editor.component.scss'
})
export class UserEditorComponent implements OnInit {
  
  @Input()row?:User;
  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  myModal!:bootstrap.Modal;

  constructor(
    private userService: AccountService
  ){
    
  }
  ngOnInit(): void {
      this.myModal = new bootstrap.Modal(<HTMLInputElement>document.getElementById('staticBackdrop'));
      this.myModal.show();
  }

  closeModal(){
    //cerrar el modal
    this.myModal.hide();
    //this.myModal.handleUpdate();
    this.closeModalEvent.emit(true);
  }
}
