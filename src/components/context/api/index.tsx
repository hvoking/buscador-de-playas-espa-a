// App imports
import { BeachApiProvider } from './beach';
import { GoogleApiProvider } from './google';

export const ApiProvider = ({children}: any) => {
  return (
    <GoogleApiProvider>
    <BeachApiProvider>
      {children}
    </BeachApiProvider>
    </GoogleApiProvider>
  )
}

ApiProvider.displayName="ApiProvider";