// My css.d.ts file
import type * as CSS from 'csstype';

declare module 'csstype' {
  interface Properties {
    // Add a missing property
    WebkitRocketLauncher?: string;

    // Allow namespaced CSS Custom Properties
    [index: `--theme-${string}`]: any;
    
    // Allow any CSS Custom Properties
    [index: `--${string}`]: any;

    // ...or allow any other property
    [index: string]: any;
  }
}