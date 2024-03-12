import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { t } from 'i18next';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id: string}>();

    if (!id) {
        return <Text text={t('Профиль не найден')} />;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack max gap="16">
                <EditableProfileCard id={id} />
            </VStack>

        </Page>
    );
};

export default ProfilePage;
