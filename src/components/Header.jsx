import React from 'react'
import { Button, Menu, Text, Container } from "@mantine/core";
const Header = () => {
  return (
    <header>
        <Container>
            <div style={{display:"flex", 
            justifyContent:"space-between", 
            alignItems:"center",
            padding:"10px"}}>
                <Text>My Money</Text>
            
                <Menu>
                    <Menu.Target>
                        <Button>
                            Jagan
                        </Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item>
                            Logout
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </div>
        </Container>
    </header>
  )
}

export default Header