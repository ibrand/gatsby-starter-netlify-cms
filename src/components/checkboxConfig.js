const checkboxes = {
  'I am a' : [
    {
      name: 'Student',
      label: 'i-am-student',
      key: 1
    },
    {
      name: 'Parent',
      label: 'i-am-parent',
      key: 2
    },
    {
      name: 'Teacher',
      label: 'i-am-teacher',
      key: 3
    }
  ],
  'Have you ever seen or experienced any of the following in your school - Youth' : [
    {
      name: 'Stopped and frisked by School Safety Agents/School Resource Officers/Police',
      key: 1
    },
    {
      name: 'Having my bag or pockets searched by school staff',
      key: 2
    },
    {
      name: 'Being asked to leave a class',
      key: 3
    },
    {
      name: 'Being given a summons',
      key: 4
    },
    {
      name: 'Being discouraged from attending the school',
      key: 5
    },
    {
      name: 'Did not receive support with issues of bullying even when the school was informed',
      key: 6
    },
    {
      name: 'Being suspended even if you were being bullied',
      key: 7
    },
    {
      name: 'Abused by an authority figure in your school that caused you an injury',
      key: 8
    },
    {
      name: 'Have been harassed by a teacher, SSA or Police for speaking up for myself',
      key: 9
    },
    {
      name: 'Have been harassed by a teacher/SSA/Police/School staff because of my race/ethnicity, religion, gender, class, immigration status, or sexual orientation',
      key: 10
    }
  ],
  'Have you ever seen or experienced any of the following in your school - Parents' : [
    {
      name: 'Have not received translation and interpretation services to communicate with the school',
      key: 1
    },
    {
      name: 'Had to take the day out of work to go into school for an unnecessary issue',
      key: 2
    },
    {
      name: 'Not made aware of the resources available for my child',
      key: 3
    },
    {
      name: 'Received no help from Administration for my child',
      key: 4
    },
    {
      name: 'The School did not listen to or dismissed my concerns about my child',
      key: 5
    },
    {
      name: 'Feared going to school to pick up my Child because of my immigration status',
      key: 6
    },
    {
      name: 'Being told misleading or inaccurate information by the school',
      key: 7
    },
    {
      name: 'Have been retaliated against by school staff for speaking up for my or my child’s rights in school',
      key: 8
    }
  ],
  'Have you ever seen or experienced any of the following in your school - Teachers' : [
    {
      name: 'Being punished for teaching culturally relevant curriculum',
      key: 1
    },
    {
      name: 'Classroom and instruction being scrutinized',
      key: 2
    },
    {
      name: 'Being forced to resign or transfer',
      key: 3
    },
    {
      name: 'Being prevented from getting promotions',
      key: 4
    },
    {
      name: 'Pressured into corroborating false statements or occurrences by the School',
      key: 5
    },
    {
      name: 'The school did not listen to or dismissed my ideas',
      key: 6
    }
  ],
  'Have you, your child, your student ever been harassed/bullied in school': [
        {
          name: 'School Security Personnel (SSAs, SROs, etc.)',
          key: 1
        },
        {
          name: 'Police',
          key: 2
        },
        {
          name: 'Teacher',
          key: 3
        },
        {
          name: 'Principle',
          key: 4
        },
        {
          name: 'Dean',
          key: 5
        },
        {
          name: 'Guidance Counselor',
          key: 6
        },
        {
          name: 'Supervisor',
          key: 7
        },
        {
          name: 'Superintendent',
          key: 8
        },
   ],
  'What were the impacts of the experience you faced': [
    {
      name: 'Made me feel like I was worthless/they didn’t care or didn’t want to help me',
      key: 1
    },
    {
      name: 'Increased my level of fear and anxiety being in school',
      key: 2
    },
    {
      name: 'Made me feel ashamed and uncomfortable',
      key: 3
    },
    {
      name: 'Made me not want to go to/be in school',
      key: 4
    },
    {
      name: 'I was punished (Suspended, detention, expelled, given more work, etc.)',
      key: 5
    },
    {
      name: 'I could not focus and by grades/work suffered',
      key: 6
    },
    {
      name: 'Felt depressed and hopeless',
      key: 7
    },
    {
      name: 'Afraid to speak out and or ask for help',
      key: 8
    },
    {
      name: 'Afraid to be your full self in school',
      key: 9
    },
  ],
  'I believe the reason for the Harassment/bullying was due to my/their...' : [
    {
      name: 'Race',
      key: 1
    },
    {
      name: 'Sexual Orientation',
      key: 2
    },
    {
      name: 'Language ability',
      key: 3
    },
    {
      name: 'Ethnicity',
      key: 4
    },
    {
      name: 'Immigration',
      key: 5
    },
    {
      name: 'Disability',
      key: 6
    },
    {
      name: 'Gender',
      key: 7
    },
    {
      name: 'Religion',
      key: 8
    },
    {
      name: 'Age',
      key: 9
    },
  ]
}

export default checkboxes;
