import { getMapServiceByName } from './src/lib/map-services';
import MapService from './tests/models/map-service';

describe( 'models::map-services', () => {
  it( 'should create a new service model', () => {
    const name = 'OpenStreetMap';
    const osm = getMapServiceByName( name );
    const service = new MapService( osm );
    expect( service.name ).toEqual( name );
  });
});
