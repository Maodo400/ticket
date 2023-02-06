import { EnumEtat } from 'app/entities/enumerations/enum-etat.model';

export interface ITicket {
  id: number;
  etat?: EnumEtat | null;
  email?: string | null;
  demande?: string | null;
}

export type NewTicket = Omit<ITicket, 'id'> & { id: null };
