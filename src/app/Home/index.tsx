import { useState, useEffect } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./style";

import { FilterStatus } from "@/types/FilterStatus";

import Item from "@/components/Item";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import {
  add,
  clear,
  getByStatus,
  ItemStorage,
  remove,
  toggleStatus,
} from "@/storage/itemsStorage";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING];

export function Home() {
  const [filterStatus, setFilterStatus] = useState<FilterStatus>(
    FilterStatus.PENDING
  );
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<ItemStorage[]>([]);

  useEffect(() => {
    getByStatus(filterStatus).then(setItems);
  }, [filterStatus]);

  async function handleToggleItemsStatus(id: string) {
    await toggleStatus(id);
    getByStatus(filterStatus).then(setItems);
  }

  async function handleAddItem() {
    if (!description.trim()) {
      return Alert.alert("Valor vazio", "Digite uma item para adicionar");
    }

    const newItem: ItemStorage = {
      id: Math.random().toString().substring(2),
      description,
      status: FilterStatus.PENDING,
      createdAt: new Date(),
    };

    const itemExists = items.some(
      (item) => item.description === newItem.description
    );
    if (itemExists) {
      return Alert.alert("Erro", "Item já existe");
    }

    await add(newItem);
    await getByStatus(filterStatus).then(setItems);
    setDescription("");
  }

  async function handleRemove(id: string) {
    await remove(id);
    await getByStatus(filterStatus).then(setItems);
  }

  async function handleClearItems() {
    Alert.alert(
      "Limpar itens",
      "Tem certeza que deseja limpar todos os itens?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Limpar",
          onPress: async () => {
            await clear();
            setItems([]);
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <View style={styles.form}>
        <Input
          placeholder="O que você deseja comprar?"
          placeholderTextColor="rgba(255, 255, 255, 0.35)"
          value={description}
          onChangeText={setDescription}
        />
        <Button title="Adicionar" onPress={handleAddItem} />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter
              key={status}
              status={status}
              isActive={status === filterStatus}
              onPress={() => setFilterStatus(status)}
            />
          ))}
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearItems}
          >
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onRemove={() => handleRemove(item.id)}
              onStatus={() => handleToggleItemsStatus(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyIcon}>🛒</Text>
                <Text style={styles.emptyTitle}>
                  {filterStatus === FilterStatus.PENDING
                    ? "Nenhum item pendente"
                    : "Nenhum item concluído"}
                </Text>
                <Text style={styles.emptyMessage}>
                  {filterStatus === FilterStatus.PENDING
                    ? "Adicione itens à sua lista de compras para começar a organizar suas compras!"
                    : "Complete alguns itens da sua lista para vê-los aqui."}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
