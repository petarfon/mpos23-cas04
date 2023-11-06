import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { DataService } from '../service/data.service';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.page.html',
  styleUrls: ['./add-new-item.page.scss'],
})

export class AddNewItemPage implements OnInit {
  taskName!: string
  taskCategory!: string
  taskDate: string = '2023-10-24T00:00:00';

  constructor(public modalCtrl: ModalController, private dataservice: DataService) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async addTask() {
    await this.dataservice.addTask(
      {
        name: this.taskName,
        date: this.taskDate,
        category: this.taskCategory,
        done: false
      }
    );

    this.dismiss();
  }

}
