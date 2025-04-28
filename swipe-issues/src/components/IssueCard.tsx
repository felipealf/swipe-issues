import { Issue } from '../data/dummyIssues';
import { View, Text, Linking, StyleSheet } from 'react-native';

export default function IssueCard({ issue }: { issue: Issue }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{issue.title}</Text>
      <Text style={styles.repo}>{issue.repo}</Text>
      <Text style={styles.lang}>{issue.language}</Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL(issue.url)}>
        View on GitHub →
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 8 },
  repo: { fontSize: 16, opacity: 0.7 },
  lang: { fontSize: 14, opacity: 0.6, marginTop: 4 },
  link: { marginTop: 12, color: '#2563eb', fontWeight: '500' },
});
