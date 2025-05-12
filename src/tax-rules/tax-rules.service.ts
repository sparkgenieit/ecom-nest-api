import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TaxRulesService {
  constructor(private prisma: PrismaService) { }

  create(data: any) { console.log('data',data);
    return this.prisma.taxRule.create({ data });
  }

  findAll() {
    return this.prisma.taxRule.findMany();
  }

  findOne(id: number) {
    return this.prisma.taxRule.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.taxRule.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.taxRule.delete({ where: { id } });
  }
}