// App imports
import { GeoProvider } from './geo';
import { SliderProvider } from './slider';

export const FiltersProvider = ({children}: any) => {
  return (
    <GeoProvider>
    <SliderProvider>
      {children}
    </SliderProvider>
    </GeoProvider>
  )
}

FiltersProvider.displayName="FiltersProvider";