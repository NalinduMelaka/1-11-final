'use server'


import prisma from '@/lib/prisma';

async function groupDataByMonth(data: any[]) {
  const monthsData: { [key: number]: number } = {};

  data.forEach((item) => {
    const createdAt = new Date(item.createdAt);
    const month = createdAt.getMonth() + 1; // Adding 1 to adjust from 0-indexed to 1-indexed months
    if (!monthsData[month]) {
      monthsData[month] = 0;
    }
    monthsData[month]++;
  });

  const allMonths: { [key: number]: number } = {};
  for (let i = 1; i <= 12; i++) {
    allMonths[i] = monthsData[i] || 0;
  }

  return allMonths;
}



export async function groupbycontractmonth() {

  try{
    const contracts = await prisma.contract.findMany();
    const result = await groupDataByMonth(contracts);
    return result;
  }catch(error: any){
    console.log(`found a error on get group month contract`)
    return {};
  }finally {
    await prisma.$disconnect();
  }  
}


export async function groupbyothermonth() {

  try{
    const others = await prisma.otherlabel.findMany();

    const result = await groupDataByMonth(others);
    return result;

  }catch(error: any){
    console.log(`found a error on get group month other`)
    return {};
  }finally {
    await prisma.$disconnect();
  }

  
}

export async function groupbycaremonth() {

  try{
    const cares = await prisma.carelabel.findMany();
    const result = await groupDataByMonth(cares);
    return result;
  }catch(error: any){
    console.log(`found a error on get group month care`)
    return {};
  }finally {
    await prisma.$disconnect();
  }
}


export async function groupbyquantitymonth() {

  try{
    const quntities = await prisma.contity.findMany();
    const result = await groupDataByMonth(quntities);
    return result;
  }catch(error: any){
    console.log(`found a error on get group month quntity`)
    return {};
  }finally {
    await prisma.$disconnect();
  }
}