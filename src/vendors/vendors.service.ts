import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VendorsService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.vendor.create({ data });
  }

  findAll() {
    return this.prisma.vendor.findMany();
  }

  findOne(id: number) {
    return this.prisma.vendor.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.vendor.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.vendor.delete({ where: { id } });
  }
}
