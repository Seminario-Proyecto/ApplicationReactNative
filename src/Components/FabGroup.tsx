import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';

const Fabgr = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }:any) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
        
        visible={true}
        

          open={open}
          icon={open ? 'calendar-today' : 'folder'}
          actions={[
            
            
            {
              icon: 'account-edit',
              label: 'Eliminar',
              onPress: () => console.log('Pressed eliminar'),
            },
            {
                icon: 'account-edit',
                label: 'Editar',
                onPress: () => console.log('Pressed editar'),
                small: false
              },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default Fabgr;