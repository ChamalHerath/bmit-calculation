import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ratio-analysis-cal',
  templateUrl: './ratio-analysis-cal.component.html',
  styleUrls: ['./ratio-analysis-cal.component.scss']
})
export class RatioAnalysisCalComponent implements OnInit {
  totalSales = 0;
  grossProfit = 0;
  grossProfitRate = 0.00;
  netProfit = 0;
  netProfitRate = 0.00;
  currentRate = 0.00;
  currentAssets = 0;
  currentLiabilities = 0;
  quickRate = 0.00;
  inventory = 0;
  receivableDays = 0;
  tradeDebtors = 0;
  gearingRatio = 0.00;
  equity = 0;
  debt = 0;

  constructor() {
  }

  ngOnInit(): void {
  }


  onCalculateClick(): void {
    this.calculateGrossProfitRatio();
    this.calculateNetProfitRatio();
    this.calculateCurrentRatio();
    this.calculateQuickRatio();
    this.calculateReceivableDays();
    this.calculateGearingRatio();


  }

  private calculateGrossProfitRatio(): void {
    try {
      this.grossProfitRate = +(+this.grossProfit / +this.totalSales * 100).toFixed(2);
    } catch (e) {
    }
  }
  private calculateNetProfitRatio(): void {
    try {
      this.netProfitRate = +(this.netProfit / this.totalSales * 100).toFixed(2);
    } catch (e) {
    }
  }
  private calculateCurrentRatio(): void {
    try {
      this.currentRate = +(this.currentAssets / this.currentLiabilities).toFixed(2);
    } catch (e) {
    }
  }
  private calculateQuickRatio(): void {
    try {
      this.quickRate = +((this.currentAssets - this.inventory) / this.currentLiabilities).toFixed(2);
    } catch (e) {
    }
  }
  private calculateReceivableDays(): void {
    try {
      this.receivableDays = (this.tradeDebtors / this.totalSales) * 356;
    } catch (e) {
    }
  }
  private calculateGearingRatio(): void {
    try {
      this.gearingRatio = +((this.debt / this.equity) * 100).toFixed(2);
    } catch (e) {
    }
  }
}
