import { View, StyleSheet, Alert } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import IssueCard from '../../src/components/IssueCard';
import { useIssues } from '../../src/store/useIssues';

export default function HomeScreen() {
  const { queue, pop } = useIssues();

  return (
    <View style={styles.container}>
      {queue.length > 0 ? (
        <Swiper
          cards={queue}
          renderCard={(card) => <IssueCard issue={card} />}
          backgroundColor="transparent"
          stackSize={3}
          onSwipedRight={(i) => {
            const issue = queue[i];
            Alert.alert('Liked 👍', issue.title);
            pop();
          }}
          onSwipedLeft={() => pop()}
        />
      ) : (
        <></> /* later show Lottie loader or “No more issues” */
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 48 },
});
