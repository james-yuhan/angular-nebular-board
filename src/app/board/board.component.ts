import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  settings = {
    mode: 'external',
    actions: false,
    hideSubHeader: true,
    filter: false,
    pager: {
      display: true,
      perPage: 20
    },
    columns: {
      no: {
        title: '글번호',
        width: '10%'
      },
      title: {
        title: '제목',
        width: '80%'
      },
      username: {
        title: '작성자',
        width: '10%'
      }
    }
  };

  data = [
    {
      no: 1,
      title: 'Leanne Graham',
      username: 'Bret'
    },
    {
      no: 2,
      title: 'Ervin Howell',
      username: 'Antonette'
    },

    // ... list of items

    {
      no: 11,
      title: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  detail(event) {
    location.href = 'board/detail';
    console.log(event.data.id);
  }
}
