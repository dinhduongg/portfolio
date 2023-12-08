export interface exp {
  time: string
  compName: string
  position: string
  jobDetail: string[]
}

export const experience: exp[] = [
  {
    time: '05/2022 - 05/2023',
    compName: 'Pan software company limited',
    position: 'Frontend & Backend Developer',
    jobDetail: [
      'Make admin page in Vuejs.',
      'Learn nestjs, mplemented and updated api for web application features.',
      'Implemented a responsive design that ensured the web application was accessible on all devices.'
    ]
  },
  {
    time: '08/2023 - Present',
    compName: 'Thegioiic',
    position: 'Frontend & Backend Developer',
    jobDetail: [
      'Make admin and user page in nextjs.',
      'Implemented a responsive design that ensured the web application was accessible on all devices.',
      'Implemented api for web application in nestjs.'
    ]
  }
]
