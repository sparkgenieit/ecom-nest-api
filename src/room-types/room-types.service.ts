import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoomTypesService {
  constructor(private prisma: PrismaService) { }

  create(data: any) {
    return this.prisma.roomType.create({ data });
  }

  findAll() {
    return this.prisma.roomType.findMany();
  }

  findOne(id: number) {
    return this.prisma.roomType.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.roomType.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.roomType.delete({ where: { id } });
  }
}