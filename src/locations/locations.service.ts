import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LocationsService {
  constructor(private prisma: PrismaService) { }

  create(data: any) {
    return this.prisma.location.create({ data });
  }

  findAll() {
    return this.prisma.location.findMany();
  }

  findOne(id: number) {
    return this.prisma.location.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.location.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.location.delete({ where: { id } });
  }
}