import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../PostShare/PostShare'
function ShareModel({modelOpened,setModelOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modelOpened}
      onClose={()=>setModelOpened(false)}
      size='55%'
    >
      <PostShare />
    </Modal>
  );
}
export default ShareModel;