import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModel({modelOpened,setModelOpened}) {
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
      <form className="infoForm">
        <h3>Your Info</h3>
        <div>
            <input type="text" className='infoInput' name='FirstName' placeholder='First Name'/>
            <input type="text" className='infoInput' name='lastName' placeholder='Last Name'/>
        </div>
        <div>
        <input type="text" className='infoInput' name='worksAt' placeholder='Works At'/>
        </div>
        <div>
            <input type="text" className='infoInput' name='livesIn' placeholder='Lives In'/>
            <input type="text" className='infoInput' name='country' placeholder='Country'/>
        </div>
        <div>
            <input type="text" className='infoInput' placeholder='RelationShip Status'/>
        </div>
        <div>
            Profile Image
            <input type="file" name='profileImage' />
            Cover Image
            <input type="file" name='coverImage' />
        </div>
        <button className='button infoButton'>Update</button>
      </form>
    </Modal>
  );
}
export default ProfileModel;