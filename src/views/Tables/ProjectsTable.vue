<template>
  <div class="card shadow"
       :class="type === 'dark' ? 'bg-default': ''">
    <div class="card-header border-0"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white': ''">
            {{title}}
          </h3>
        </div>
      </div>
    </div>

    <div class="table-responsive">

      <div class="pl-lg-4">
          <div class="row">
              <div class="col-lg-4">
                  <base-input alternative=""
                              placeholder="Aerolínea"
                              input-classes="form-control-alternative"
                  />
              </div>
              <div class="col-lg-4">
                  <base-input alternative=""
                              placeholder="# de vuelo"
                              input-classes="form-control-alternative"
                  />
              </div>
              <div class="col-lg-4">
                <button type="button" class="btn btn-primary">Buscar</button>
              </div>
          </div>
      </div>      
      <base-table class="table align-items-center table-flush"
                  :class="type === 'dark' ? 'table-dark': ''"
                  :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                  tbody-classes="list"
                  :data="tableData">

        <template slot="columns">
          <th>Aerolinea</th>
          <th>Vuelo</th>
          <th>Procedencia</th>
          <th>Hora Programada</th>
          <th>Hora Real</th>
          <th>Estado</th>
          <th>Puerta</th>
          <th></th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm">{{row.aerolinea}}</span>
              </div>
            </div>
          </th>
          <td class="budget">
            {{row.vuelo}}
          </td>
          <td>
            <badge class="badge-dot mr-4">
              <span class="status">{{row.procedencia}}</span>
            </badge>
          </td>
          <td class="budget">
            {{row.horaProgramada}}
          </td>
          <td class="budget">
            {{row.horaReal}}
          </td>
          <td class="budget">
            {{row.estado}}
          </td>                              
          <td class="budget">
            {{row.puerta}}
          </td>


        </template>

      </base-table>
    </div>


  </div>
</template>
<script>
  export default {
    name: 'projects-table',
    props: {
      type: {
        type: String
      },
      title: String
    },
    data() {
      return {
        tableData: [
          {
            aerolinea: 'Latam',
            vuelo: 'AIR250',
            procedencia: 'Rio',
            horaProgramada: '04:50',
            horaReal: '04:50',
            estado: 'Aterrizado',
            puerta: '5'
          },
          {
            aerolinea: 'Air America',
            vuelo: 'MIR100',
            procedencia: 'Nueva York',
            horaProgramada: '18:00',
            horaReal: '19:00',
            estado: 'Aterrizado',
            puerta: '10'
          },
          {
            aerolinea: 'Qatar Airways',
            vuelo: 'QAT212',
            procedencia: 'Riad',
            horaProgramada: '20:00',
            horaReal: '20:00',
            estado: 'Aterrizado',
            puerta: '12'
          },
          {
            aerolinea: 'RyanAir',
            vuelo: 'RAN001',
            procedencia: 'Madrid',
            horaProgramada: '22:00',
            horaReal: '23:00',
            estado: 'Cancelado',
            puerta: '15'
          },
          {
            aerolinea: 'Vue Plane',
            vuelo: 'VUE333',
            procedencia: 'Framework City',
            horaProgramada: '04:50',
            horaReal: '05:00',
            estado: 'Atrasado',
            puerta: '23'
          }
        ]
      }
    }
  }
</script>
<style>
</style>
