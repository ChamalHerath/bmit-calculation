import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AssetsTableModel} from '../models/AssetsTableModel';

@Component({
  selector: 'app-assets-table',
  templateUrl: './assets-table.component.html',
  styleUrls: ['./assets-table.component.sass']
})
export class AssetsTableComponent implements OnInit {

  @ViewChild('assetText') assetText = {} as ElementRef;
  id = 0;
  tableArr: AssetsTableModel[] = [];
  FinalResults: AssetsTableModel = new AssetsTableModel();
  // FinalResult = {} as AssetsTableModel;
  assets = '';
  capital = 0;
  liabilities = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  addToArray(): void {
    const id = this.id + 1;
    try {
      if (this.assets !== '') {
        if (this.assets.includes(',')) {
          const arr = this.assets.split(',');
          this.tableArr.push(
            {
              id,
              assets: +arr[0] + +arr[1],
              liabilities: 0,
              capital: 0
            }
          );
          this.resetForm();
        } else {
          this.setValToArray(id);
          this.resetForm();
        }
      } else {
        this.setValToArray(id);
        this.resetForm();
      }
    } catch (e) {
      alert('Error');
      console.clear();
      console.error(e);
    } finally {
      this.calculateFinal();
      this.assetText.nativeElement.focus();
    }

  }

  private setValToArray(id: number): void {

    if (this.assets === '') {
      this.tableArr.push(
        {
          id,
          assets: +this.capital + +this.liabilities,
          liabilities: this.liabilities,
          capital: this.capital
        }
      );
      console.log(this.assets);
      return;
    }

    if (this.capital !== 0) {
      this.tableArr.push(
        {
          id,
          assets: +this.assets,
          liabilities: +this.assets - +this.capital,
          capital: this.capital
        }
      );
      return;
    }
    if (this.liabilities !== 0) {
      this.tableArr.push(
        {
          id,
          assets: +this.assets,
          liabilities: this.liabilities,
          capital: +this.assets - +this.liabilities
        }
      );
      return;
    }

  }

  deleteFromArray(assetModel: AssetsTableModel): void {
    const ArrIndex = this.tableArr.indexOf(assetModel);
    this.tableArr.splice(ArrIndex, 1);
    this.calculateFinal();
  }

  private resetForm(): void {
    this.assets = '';
    this.liabilities = 0;
    this.capital = 0;
  }

  private calculateFinal(): void {
    this.FinalResults =  new AssetsTableModel();
    this.tableArr.forEach(value => {
      this.FinalResults.assets += +value.assets;
      this.FinalResults.liabilities += +value.liabilities;
      this.FinalResults.capital += +value.capital;
    });
  }
}
