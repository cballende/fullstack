export const initialBreadCrumb = {
  selectedId: 0,
  breadCrumbs: [{ id: 1, //account id
                  index:0,
                  text: 'Cuentas',
                  path: '/account',
                  done: true,
                 },{ id: 1,//service id
                  index:1,
                  text: 'Servicios',
                  path: '/service',
                  done: true,
                 }]
};

export function breadCrumbReducer(breadCrumb, action) {
  switch (action.type) {
    case 'added': {
      return {
        selectedId: action.id,
        breadCrumbs:[
          ...breadCrumb.breadCrumbs,
          {
            id: action.id,
            index: action.index,
            text: action.text,
            path: action.path,
            done: action.done,
          },
        ]
      };
    }
    case 'changed': {
      return breadCrumb.breadCrumbs.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return breadCrumb.breadCrumbs.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
