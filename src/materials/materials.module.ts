import { Module } from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { MaterialsController } from './materials.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [MaterialsService],
  controllers: [MaterialsController],
})
export class MaterialsModule {}