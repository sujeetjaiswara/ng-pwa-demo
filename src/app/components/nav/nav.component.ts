import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  deferredPrompt: any;
  installButton = true;

  constructor(private cd: ChangeDetectorRef) { }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(event: any) {
    console.log('👍', 'beforeinstallprompt', event);
    this.deferredPrompt = event;
    this.installButton = true;
    this.cd.detectChanges();
  }

  /* Add to home screen (A2HS) */
  async onInstall() {
    const promptEvent = this.deferredPrompt;
    if (!promptEvent) {
      return;
    }

    promptEvent.prompt();

    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);

    this.deferredPrompt = null;
    this.installButton = false;
    this.cd.detectChanges();
  }

  @HostListener('window:appinstalled', ['$event'])
  onappinstalled(event: any) {
    console.log('👍', 'appinstalled', event);
    this.deferredPrompt = null;
  }
}
