import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
  deferredPrompt: any;
  installButton = false;

  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnInit(): void {

  }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(event: any) {
    console.log('👍', 'beforeinstallprompt (default layout component)', event);

    // Stash the event so it can be triggered later.
    this.deferredPrompt = event;

    // Show our user interface that shows our A2HS button
    this.installButton = true;
    this.cd.detectChanges();
  }

  /* AW - Add to home screen (A2HS) */
  async addToHomeScreen() {
    console.log('👍', 'butInstall-clicked');

    const promptEvent = this.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      return;
    }

    // Show the install prompt.
    promptEvent.prompt();

    // Log the result
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);

    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    this.deferredPrompt = null;

    // Hide the install button.
    this.installButton = false;
    this.cd.detectChanges();
  }

  @HostListener('window:appinstalled', ['$event'])
  onappinstalled(event: any) {
    console.log('👍', 'appinstalled', event);
    // Clear the deferredPrompt so it can be garbage collected
    this.deferredPrompt = null;
  }
}
