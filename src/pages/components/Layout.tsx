import { AppShell,Text,Box} from '@mantine/core';

export default function Layout({ children }: { children:React.ReactNode}) {
    return (
        <AppShell padding="md">
            <Box style={{
                height: 60,
                padding: 'xs',
                backgroundColor :'#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
            <Text>Task Manager</Text>
            </Box>
            {children}
        </AppShell>
    );
}