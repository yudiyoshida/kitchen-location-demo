import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private data: ClientResponse[] = [
    {
      id: 'ID-1',
      name: 'João da Silva',
      email: 'joaosilva@email.com',
      phone: '(11) 99999-9999',
      imageUrl: 'https://i.pravatar.cc/150?img=1',
      createdAt: '01/03/2024',
      updatedAt: '01/03/2024',
    },
    {
      id: 'ID-2',
      name: 'Maria da Silva',
      email: 'mariasilva@email.com',
      phone: '(34) 99999-9999',
      imageUrl: 'https://i.pravatar.cc/150?img=8',
      createdAt: '01/03/2024',
      updatedAt: '01/03/2024',
    },
    {
      id: 'ID-3',
      name: 'Carlos Pereira',
      email: 'carlospereira@email.com',
      phone: '(21) 98888-7777',
      imageUrl: 'https://i.pravatar.cc/150?img=1',
      createdAt: '02/03/2024',
      updatedAt: '02/03/2024',
    },
    {
      id: 'ID-4',
      name: 'Ana Oliveira',
      email: 'anaoliveira@email.com',
      phone: '(19) 97777-6666',
      imageUrl: 'https://i.pravatar.cc/150?img=8',
      createdAt: '02/03/2024',
      updatedAt: '02/03/2024',
    },
    {
      id: 'ID-5',
      name: 'Lucas Souza',
      email: 'lucassouza@email.com',
      phone: '(31) 96666-5555',
      imageUrl: 'https://i.pravatar.cc/150?img=1',
      createdAt: '03/03/2024',
      updatedAt: '03/03/2024',
    },
    {
      id: 'ID-6',
      name: 'Fernanda Lima',
      email: 'fernandalima@email.com',
      phone: '(51) 95555-4444',
      imageUrl: 'https://i.pravatar.cc/150?img=8',
      createdAt: '03/03/2024',
      updatedAt: '03/03/2024',
    },
    {
      id: 'ID-7',
      name: 'Pedro Santos',
      email: 'pedrosantos@email.com',
      phone: '(47) 94444-3333',
      imageUrl: 'https://i.pravatar.cc/150?img=1',
      createdAt: '04/03/2024',
      updatedAt: '04/03/2024',
    },
    {
      id: 'ID-8',
      name: 'Juliana Mendes',
      email: 'julianamendes@email.com',
      phone: '(61) 93333-2222',
      imageUrl: 'https://i.pravatar.cc/150?img=8',
      createdAt: '04/03/2024',
      updatedAt: '04/03/2024',
    },
    {
      id: 'ID-9',
      name: 'Gabriel Costa',
      email: 'gabrielcosta@email.com',
      phone: '(83) 92222-1111',
      imageUrl: 'https://i.pravatar.cc/150?img=9',
      createdAt: '05/03/2024',
      updatedAt: '05/03/2024',
    },
    {
      id: 'ID-10',
      name: 'Carolina Rocha',
      email: 'carolinarocha@email.com',
      phone: '(91) 91111-0000',
      imageUrl: 'https://i.pravatar.cc/150?img=0',
      createdAt: '05/03/2024',
      updatedAt: '05/03/2024',
    },
    {
      id: 'ID-11',
      name: 'Rafael Almeida',
      email: 'rafaelalmeida@email.com',
      phone: '(85) 98888-9999',
      imageUrl: 'https://i.pravatar.cc/150?img=1',
      createdAt: '06/03/2024',
      updatedAt: '06/03/2024',
    },
    {
      id: 'ID-12',
      name: 'Isabela Fernandes',
      email: 'isabelafernandes@email.com',
      phone: '(24) 97777-8888',
      imageUrl: 'https://i.pravatar.cc/150?img=8',
      createdAt: '06/03/2024',
      updatedAt: '06/03/2024',
    },
    {
      id: 'ID-13',
      name: 'Thiago Ribeiro',
      email: 'thiagoribeiro@email.com',
      phone: '(62) 96666-7777',
      imageUrl: 'https://i.pravatar.cc/150?img=1',
      createdAt: '07/03/2024',
      updatedAt: '07/03/2024',
    },
    {
      id: 'ID-14',
      name: 'Camila Martins',
      email: 'camilamartins@email.com',
      phone: '(73) 95555-6666',
      imageUrl: 'https://i.pravatar.cc/150?img=8',
      createdAt: '07/03/2024',
      updatedAt: '07/03/2024',
    },
  ];

  public findAll(): Observable<ClientResponse[]> {
    return of(this.data);
  }

  public findById(id: string): Observable<ClientResponse> {
    const client = this.data.find((client) => client.id === id);

    return of(client || {} as ClientResponse);
  }
}

export type ClientResponse = {
  id: string;
  name: string;
  email: string;
  phone: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}
