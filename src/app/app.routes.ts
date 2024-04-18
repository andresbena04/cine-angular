import { Routes } from '@angular/router';
import { TarjetaClienteComponent } from './components/tarjeta_cliente/tarjeta_cliente.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { PublicidadComponent } from './components/publicidad/publicidad.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TerminosCondicionesComponent } from './components/terminos-condiciones/terminos-condiciones.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { CafeteriaComponent } from './components/cafeteria/cafeteria.component';
import { PqrComponent } from './components/pqr/pqr.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { ProximamenteComponent } from './components/proximamente/proximamente.component';

export const routes: Routes = [
    {path: '', component:CarteleraComponent},
    {path: 'tarjeta-cliente',component:TarjetaClienteComponent},
    {path: 'conocenos', component:ConocenosComponent},
    {path: 'publicidad', component:PublicidadComponent},
    {path: 'servicios', component:ServiciosComponent},
    {path: 'terminos-condiciones', component:TerminosCondicionesComponent},
    {path: 'promociones', component:PromocionesComponent},
    {path: 'cafeteria', component:CafeteriaComponent},
    {path: 'pqr', component:PqrComponent},
    {path: 'contactenos', component:ContactoComponent},
    {path: 'cartelera', component:CarteleraComponent},
    {path: 'proximamente', component:ProximamenteComponent},
    { path: '**', redirectTo: '' }
];
