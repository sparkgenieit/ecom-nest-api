import { Module } from '@nestjs/common';
import { TaxRulesService } from './tax-rules.service';
import { TaxRulesController } from './tax-rules.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TaxRulesService],
  controllers: [TaxRulesController],
})
export class TaxRulesModule {}