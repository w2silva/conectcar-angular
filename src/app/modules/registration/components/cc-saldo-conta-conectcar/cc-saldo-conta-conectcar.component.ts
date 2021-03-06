import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Animations } from 'app/animations';
import { RegistrationComponent } from './../../registration.component';
import { RecursosService } from 'app/services/recursos.service';
import { NgbActiveModal, NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Masks } from 'app/masks';
import { RoutesFlowService } from 'app/services/routes-flow.service';
import * as localStore from 'store';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-registration-cc-saldo-conta-conectcar',
  templateUrl: './cc-saldo-conta-conectcar.component.html',
  styleUrls: ['./cc-saldo-conta-conectcar.component.less'],
  encapsulation: ViewEncapsulation.None,
  animations: [ Animations.slideInOut ]
})
export class ComoFuncionaSaldoContaConectcarComponent implements OnInit, AfterViewInit {

  @Output() onResize = new EventEmitter<void>();

  veiculosCount: number;
  veiculosAds: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _activeModal: NgbActiveModal,
    private _ngbConfig: NgbCarouselConfig,
    private registration: RegistrationComponent,
    private routesFlow: RoutesFlowService,
    private R: RecursosService,
  ) {
    this._ngbConfig.interval = 0;
    this._ngbConfig.wrap     = false; // do ultimo para o primeiro
    this._ngbConfig.keyboard = true;

    this.veiculosCount = (localStore.get('veiculosTemp') || []).length;

    if (this.veiculosCount === 1) {
      this.veiculosAds = 'adesivo';
    } else {
      this.veiculosAds = 'adesivos';
    }
  }

  ngOnInit() {
    this.registration.bgcontent  = 'image8';
    this.registration.txtcontent = "<h1>" + this.R.R('sidebar_titulo_design_tecnologia') + "</h1><p>" + this.R.R('sidebar_desc_em_alguns_passos') + "</p>";
  }

  ngAfterViewInit() {}

  back(e) {
    e.preventDefault();
    history.back();
  }

  submit(e) {
    e.preventDefault();
    this.routesFlow.go();
  }
}
