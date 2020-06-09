import { Component } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  qrScan: any;

  constructor(public platform: Platform, public dialog: Dialogs, public qr: QRScanner) {
    //Agora desabilitar o botão de scaner quando o botão de volta for pressionado
    this.platform.backButton.subscribeWithPriority(0, () => {
      document.getElementsByTagName("ion-content")[0].style.opacity = "1";
      this.qrScan.unsubsribe();
    })
  }

  StartScanning() {
    this.qr.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        this.qr.show();
        document.getElementsByTagName("ion-content")[0].style.opacity = "0";
        this.qrScan = this.qr.scan().subscribe((textFound) => {
          document.getElementsByTagName("ion-content")[0].style.opacity = "1";
          this.qrScan.unsubsribe();
          this.dialog.alert(textFound);
        }, (err) => {
          this.dialog.alert(JSON.stringify(err));
        })
      }
      else if (status.denied) {

      }
    })
  }

}
