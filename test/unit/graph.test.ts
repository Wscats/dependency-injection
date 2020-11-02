import { Graph } from '../../src/graph';

describe('unit: graph', () => {
  test('lookup/lookupOrInsertNode/isEmpty', () => {
    const graph = new Graph((data: any) => data.id.toString());
    const data = {
      id: { toString: () => 'a' },
    };
    expect(graph.lookup(data)).toBeUndefined();
    expect(graph.lookupOrInsertNode(data).data).toEqual(data);
    expect(graph.lookup(data)?.data).toEqual(data);
    expect(graph.isEmpty()).toBeFalsy();
    graph.removeNode(data);
    expect(graph.lookup(data)).toBeUndefined();
    expect(graph.isEmpty()).toBeTruthy();
  });

  test('insertEdge/root/remove', () => {
    const graph = new Graph((data: any) => data.id.toString());
    const dataA = {
      id: { toString: () => 'a' },
    };
    const dataB = {
      id: { toString: () => 'b' },
    };
    const dataC = {
      id: { toString: () => 'c' },
    };
    const dataD = {
      id: { toString: () => 'd' },
    };

    graph.insertEdge(dataA, dataB);
    graph.insertEdge(dataA, dataC);
    graph.insertEdge(dataC, dataD);

    expect(graph.lookup(dataA)?.outcoming['b'].data).toEqual(dataB);
    expect(graph.lookup(dataA)?.outcoming['c'].data).toEqual(dataC);
    expect(graph.lookup(dataB)?.incoming['a'].data).toEqual(dataA);
    expect(graph.lookup(dataC)?.incoming['a'].data).toEqual(dataA);

    const rootNodes = graph.root();
    expect(rootNodes.length).toBe(2);
    const rootDatas = rootNodes.map((rootNode) => rootNode.data);
    expect(rootDatas).toContain(dataB);
    expect(rootDatas).toContain(dataD);

    graph.removeNode(dataC);
    expect(graph.lookup(dataA)?.outcoming['c']).toBeUndefined();
    expect(graph.lookup(dataD)?.incoming['c']).toBeUndefined();
  });
});
