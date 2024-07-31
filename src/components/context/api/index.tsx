// App imports
import { BeachApiProvider } from './beach';

export const ApiProvider = ({children}: any) => {
  return (
    <BeachApiProvider>
      {children}
    </BeachApiProvider>
  )
}

ApiProvider.displayName="ApiProvider";