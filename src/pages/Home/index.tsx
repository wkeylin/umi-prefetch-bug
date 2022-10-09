import Guide from '@/components/Guide';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';

const HomePage: React.FC = () => {
  return (
    <PageContainer>
      <div className={styles.container}>
        <Guide />
      </div>
    </PageContainer>
  );
};

export default HomePage;
