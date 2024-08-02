// App imports
import { GoogleSearchApiProvider } from './search';

export const GoogleApiProvider = ({children}: any) => {
  return (
    <GoogleSearchApiProvider>
      {children}
    </GoogleSearchApiProvider>
  )
}

GoogleApiProvider.displayName="GoogleApiProvider";