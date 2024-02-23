import { Injectable } from '@nestjs/common';
import { AbstractRepository } from '@app/common/database/abstract.repository';
import { Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReservationDocument } from './models/reservation.schema';
import { Model } from 'mongoose';

@Injectable()
export class ReservationsRepository extends AbstractRepository<ReservationDocument> {
  protected readonly logger = new Logger(ReservationsRepository.name);

  constructor(
    @InjectModel(ReservationDocument.name)
    reservationModel: Model<ReservationDocument>,
  ) {
    super(reservationModel);
  }
}
// can you find an issue with this code and the code from ./reservations.service.ts?
// yes, the repository is not being used in the service
// Path: api/apps/reservations/src/reservations.service.ts

