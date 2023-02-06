import { EnumEtat } from 'app/entities/enumerations/enum-etat.model';
import { ListDepartement } from 'app/entities/enumerations/list-departement.model';
import { ListPriorite } from 'app/entities/enumerations/list-priorite.model';

import { ITicket, NewTicket } from './ticket.model';

export const sampleWithRequiredData: ITicket = {
  id: 65582,
};

export const sampleWithPartialData: ITicket = {
  id: 982,
  etat: EnumEtat['RECU'],
  demande: 'input',
};

export const sampleWithFullData: ITicket = {
  id: 48085,
  etat: EnumEtat['RECU'],
  objet: 'Corée white',
  email: 'Nicolas.Roussel2@hotmail.fr',
  demande: 'Outdoors',
  departement: ListDepartement['SUPPORT_INCIDENT'],
  priorite: ListPriorite['MOYENNE'],
};

export const sampleWithNewData: NewTicket = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
