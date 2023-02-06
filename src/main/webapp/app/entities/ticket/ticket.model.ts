import { EnumEtat } from 'app/entities/enumerations/enum-etat.model';
import { ListDepartement } from 'app/entities/enumerations/list-departement.model';
import { ListPriorite } from 'app/entities/enumerations/list-priorite.model';

export interface ITicket {
  id: number;
  etat?: EnumEtat | null;
  objet?: string | null;
  email?: string | null;
  demande?: string | null;
  departement?: ListDepartement | null;
  priorite?: ListPriorite | null;
}

export type NewTicket = Omit<ITicket, 'id'> & { id: null };
