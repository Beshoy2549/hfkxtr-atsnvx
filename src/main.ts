import { bootstrapApplication } from '@angular/platform-browser';
    import { TableBasicDemo } from './app/table-basic-demo';
    import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

    bootstrapApplication(TableBasicDemo, {
    providers: [provideAnimationsAsync()],
    }).catch((err) => console.error(err));