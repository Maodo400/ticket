import { EnumEtat } from 'app/entities/enumerations/enum-etat.model';

import { ITicket, NewTicket } from './ticket.model';

export const sampleWithRequiredData: ITicket = {
  id: 65582,
};

export const sampleWithPartialData: ITicket = {
  id: 93545,
  etat: EnumEtat['EN_COURS'],
};

export const sampleWithFullData: ITicket = {
  id: 7730,
  etat: EnumEtat['RECU'],
  email: 'Arcadie_Menard48@gmail.com',
  demande: 'Île-de-France',
};

export const sampleWithNewData: NewTicket = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
