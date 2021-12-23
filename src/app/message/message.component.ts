import { Component, OnInit } from '@angular/core';
import { MovieService } from '@core/services/movie.service'
import { MessageService } from '@core/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    console.log((this.messageService.messages))
  }

}
