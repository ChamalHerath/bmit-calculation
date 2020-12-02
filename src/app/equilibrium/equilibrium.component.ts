import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-equilibrium',
  templateUrl: './equilibrium.component.html',
  styleUrls: ['./equilibrium.component.sass']
})
export class EquilibriumComponent implements OnInit {

  qd = '';
  qs = '';
  finalPrice = 0;
  equilibriumQuantity = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onEquilibriumCalculateClick(): void {
    try {
      console.log(this.qs, this.qd);
      this.finalPrice = 0;
      this.equilibriumQuantity = 0;
      let qdVal = 0;
      let qdP = '';

      let qsVal = 0;
      let qsP = '';

      // Find Price
      if (this.qd.includes('-')) {
        const tempArr = this.qd.split('-');
        qdP = tempArr[1];
        qdVal = +tempArr[0];
      }

      if (this.qs.includes('+')) {
        const tempArr = this.qs.split('+');
        qsP = tempArr[1];
        qsVal = +tempArr[0];
      }

      // console.log(qdP,qsP);
      // price cal step 2
      const lefSide = qdVal - qsVal;
      const rightSide = +qdP.split('p')[0] + +qsP.split('p')[0];
      this.finalPrice = lefSide / rightSide;

      // find quantity using QD
      this.equilibriumQuantity = qdVal - +qdP.split('p')[0] * this.finalPrice;
    } catch (e) {
      alert('Invalid Input');
    }


  }
}
