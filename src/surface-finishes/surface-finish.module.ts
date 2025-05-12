import { Module } from '@nestjs/common';
import { SurfaceFinishService } from './surface-finish.service';
import { SurfaceFinishController } from './surface-finish.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [SurfaceFinishService],
  controllers: [SurfaceFinishController],
})
export class SurfaceFinishModule {}