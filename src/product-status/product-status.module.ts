import { Module } from '@nestjs/common';
import { ProductStatusService } from './product-status.service';
import { ProductStatusController } from './product-status.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProductStatusService],
  controllers: [ProductStatusController],
})
export class ProductStatusModule {}