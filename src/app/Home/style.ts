import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: 82,
    gap: 14,
  },

  form: {
    width: "100%",
    gap: 7,
    marginTop: 24,
    paddingHorizontal: 20,
  },

  content: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingTop: 32,
    marginTop: 24,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.08)",
    paddingBottom: 12,
  },

  clearText: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 12,
    fontWeight: 600,
  },

  clearButton: {
    padding: 4,
    marginLeft: "auto",
  },

  logo: {
    width: 148,
    height: 34,
  },

  listContent: {
    paddingTop: 12,
    paddingBottom: 62,
  },

  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    marginVertical: 12,
  },

  emptyList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    paddingHorizontal: 32,
  },

  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
    opacity: 0.6,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "rgba(0, 0, 0, 0.7)",
    marginBottom: 8,
    textAlign: "center",
  },

  emptyMessage: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    lineHeight: 20,
    maxWidth: 280,
  },

  emptyContainer: {
    borderRadius: 16,
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
