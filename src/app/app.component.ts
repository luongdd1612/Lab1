import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 title = 'Danh Sách Bệnh Viện';
  benhvien = [
    {
      id: 1,
      name: "Sơn Tây",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8AWkRRGOCo9wPc1NkfuSPsDw3sM5h-5UVfEvkc6csVXTDjshq",
      GD: "Trần Minh Khương",
      address: "Sơn Tây",
      canhiem: 19,
      cakhoi: 10,
      catuvong: 1
    },
    {
      id: 2,
      name: "Phú Thọ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8AWkRRGOCo9wPc1NkfuSPsDw3sM5h-5UVfEvkc6csVXTDjshq",
      GD: "Nguyễn Minh Tuấn",
      address: "Phú Thọ",
      canhiem: 10,
      cakhoi: 10,
      catuvong: 0
    },
    {
      id: 3,
      name: "Ba Vì",
      img: "https://image.sggp.org.vn/w580/Uploaded/2020/buzngs/2018_07_13/benh-vien-trao-nham-con-sggp_htlu.jpg",
      GD: "Đào Duy Lương",
      address: "Ba Vì",
      canhiem: 0,
      cakhoi: 0,
      catuvong: 0
    }
  ];
  customBv = {
    id: null,
    name: null,
    img: null,
    GD: null,
    address: null,
    canhiem: 0,
    cakhoi: 0,
    catuvong: 0
  }

  removeBV(bv) {
    this.benhvien = this.benhvien.filter(function (item) {
      return item != bv;
    })
  }
  updateBV(bv) {
    this.customBv = bv;
  }

  saveBV() {
    if (this.customBv.id == null) {
      let maxId = 0;
      this.benhvien.forEach(function (item) {
        if (item.id >= maxId) {
          maxId = item.id;
        }
      });
      this.customBv.id = ++maxId;
      this.benhvien.push(this.customBv);
    }
    this.cancel();
  }
  cancel() {
    this.customBv = {
      id: null,
      name: null,
      img: null,
      GD: null,
      address: null,
      canhiem: 0,
      cakhoi: 0,
      catuvong: 0
    }
  }
}
